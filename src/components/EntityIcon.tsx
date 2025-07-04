
import { Building2 } from "lucide-react";

interface EntityIconProps {
  iconUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const EntityIcon = ({ iconUrl, className = "", size = "md" }: EntityIconProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  // Se não tem ícone personalizado, usa o ícone padrão
  if (!iconUrl) {
    return <Building2 className={`${sizeClasses[size]} ${className}`} />;
  }

  // Se tem URL de ícone personalizado, renderiza a imagem
  return (
    <img
      src={iconUrl}
      alt="Ícone da entidade"
      className={`${sizeClasses[size]} ${className} object-contain rounded`}
      onError={(e) => {
        // Se falhar ao carregar a imagem, substitui pelo ícone padrão
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.innerHTML = `<svg class="${sizeClasses[size]} ${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`;
        target.parentNode?.appendChild(fallback);
      }}
    />
  );
};

export default EntityIcon;
