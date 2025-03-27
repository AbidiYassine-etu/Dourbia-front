"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      console.log("Tentative de connexion avec:", { email, password });

      const response = await fetch("http://localhost:8000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Réponse du serveur:", data);

      if (response.ok) {
        console.log("Token reçu:", data.token);
        localStorage.setItem("token", data.token);
        console.log("Token sauvegardé:", localStorage.getItem("token"));
        router.push("/admin");
      } else {
        setErrorMessage(data.message || "Identifiants incorrects.");
      }
    } catch (error) {
      console.error("Erreur complète:", error);
      setErrorMessage("Erreur de connexion. Vérifiez votre connexion réseau.");
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] mt-20 bg-white grid grid-cols-[1fr_auto_1fr] items-stretch overflow-hidden">      {/* Message de succès */}
      {showSuccess && (
        <div className="absolute top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-500 ">
          Enregistrement réussi !
        </div>
      )}
      {/* Partie Gauche - Image */}
      <div className="relative border border-gray-300 backdrop-blur-sm shadow-lg rounded-r-[20px] overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src="/img/SigninImage.png"
            alt="Background Dourbia"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 h-full p-8">
            {/* Logo placé exactement à (x: 164px, y: 221px) */}
            <div className="absolute left-[164px] top-[93px]">
              <Image
                src="/img/logo1.png"
                alt="Logo Dourbia"
                width={340}
                height={210}
              />
            </div>
            {/* h1 placé exactement à (x: 61px, y: 536px) */}
            <h1
              className="absolute left-[177px] top-[316px] text-[55px] font-extrabold text-white leading-[85px] font-['Inter']"
            >
              ACCÉDEZ À <br />
              <span>DOURBIA !</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-20"></div>

{/* Partie Droite - Formulaire */}
<div className="relative flex justify-center items-center border border-gray-300 backdrop-blur-sm shadow-lg rounded-l-[20px] overflow-hidden">
  <div className="w-full max-w-md px-4 py-8 flex flex-col items-center relative h-full">
    {/* Logo */}
    <div className="mb-16">
      <Image
        src="/img/logo4.png"
        alt="Logo Dourbia"
        width={90}
        height={80}
        className="w-20 h-18"
      />
    </div>

    {/* Formulaire principal */}
    <form onSubmit={handleSubmit} className="w-full px-8 space-y-8 max-w-[600px] mx-auto">
      {/* Email Input */}
      <div className="relative flex justify-center">
        <div className="w-full max-w-[600px]">
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[46px] bg-transparent border-none shadow-md rounded-[15px] px-4 py-2.5 outline-none text-sm placeholder:text-[#8F8F8F]/50 text-[#8F8F8F]/50 font-abeezee"
            required
          />
          {!email && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
              <span className="text-[#8F8F8F] text-sm opacity-50 font-abeezee">Adresse e-mail</span>
              <span className="text-[#FB7822] ml-1">*</span>
            </div>
          )}
        </div>
      </div>

      {/* Password Input */}
      <div className="relative flex justify-center">
        <div className="w-full max-w-[600px]">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[46px] bg-transparent border-none shadow-md rounded-[15px] px-4 py-2.5 pr-10 outline-none text-sm placeholder:text-[#8F8F8F]/50 text-[#8F8F8F]/50 font-abeezee"
            required
          />
          {!password && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
              <span className="text-[#8F8F8F] text-sm opacity-50 font-abeezee">Mot de passe</span>
              <span className="text-[#FB7822] ml-1">*</span>
            </div>
          )}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Rest of the form remains the same */}
      {/* Remember Me & Forgot Password */}
      <div className="flex justify-between items-center max-w-[600px] mx-auto">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-6 w-6 border-2 border-[#C7C2C2] text-[#C7C2C2] focus:ring-0 rounded-sm"
            id="remember"
          />
          <label htmlFor="remember" className="text-sm font-abeezee text-[#C7C2C2]">
            Se rappeler de moi ?
          </label>
        </div>
        <Link href="/email-page" className="text-sm text-[#002863] font-abeezee underline">
          Mot de passe oublié ?
        </Link>
      </div>

{/* Submit Button - Centered */}
<div className="max-w-[200px] mx-auto flex justify-center">
  <button
    type="submit"
    className="w-[250px] h-[45px] bg-[#5ED8F2] text-white rounded-[20px] hover:bg-[#4AC0D8] transition-colors font-abeezee"
  >
    Se Connecter
  </button>
</div>


      {/* Divider */}
      <div className="flex items-center w-full max-w-[600px] mx-auto">
        <div className="flex-1 border-t border-[#707070]/35"></div>
        <span className="px-3 text-[#B1B1B1] text-xs font-actor">OU</span>
        <div className="flex-1 border-t border-[#707070]/35"></div>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-col gap-4 items-center w-full max-w-[600px] mx-auto">
        <button
          type="button"
          className="w-[156] h-[46px] bg-white border border-[#CCCCCC] rounded-[10px] flex items-center justify-center gap-x-3 font-montserrat-light text-[#000000] text-sm hover:bg-gray-50"
        >
          <FcGoogle size={20} />
          Google
        </button>
        <button
          type="button"
          className="w-[156] h-[46px] bg-white border border-[#CCCCCC] rounded-[10px] flex items-center justify-center gap-x-3 font-montserrat-light text-[#000000] text-sm hover:bg-gray-50"
        >
          <FaFacebook size={20} className="text-[#1877F2]" />
          Facebook
        </button>
      </div>

      {/* Create Account */}
      <div className="text-center max-w-[600px] mx-auto">
        <p className="text-[#474747] text-sm font-montserrat-light mb-2">
          Vous n'êtes pas un membre?
        </p>
        <Link
          href="/sign-up"
          className="text-[#FB7822] font-montserrat-semibold text-lg underline underline-offset-4 hover:text-[#FB7822]/90"
        >
          Créer un compte
        </Link>
      </div>
    </form>
  </div>
</div>
    </main>
  );
}