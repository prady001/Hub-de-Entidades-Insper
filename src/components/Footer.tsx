
import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-insper-gray-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-insper rounded-xl flex items-center justify-center shadow-md">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gradient">Hub Entidades</span>
                <span className="text-sm text-insper-gray font-medium">Insper</span>
              </div>
            </div>
            <p className="text-insper-gray leading-relaxed mb-4 max-w-md">
              Plataforma centralizada que conecta estudantes às entidades estudantis do Insper, 
              promovendo maior engajamento e visibilidade das organizações estudantis.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-insper-gray-dark mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-insper-gray hover:text-primary transition-colors smooth-focus font-medium"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="/entidades" 
                  className="text-insper-gray hover:text-primary transition-colors smooth-focus font-medium"
                >
                  Entidades
                </a>
              </li>
              <li>
                <a 
                  href="/sobre" 
                  className="text-insper-gray hover:text-primary transition-colors smooth-focus font-medium"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="/contato" 
                  className="text-insper-gray hover:text-primary transition-colors smooth-focus font-medium"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-insper-gray-dark mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-insper-gray">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-medium">hub@insper.edu.br</span>
              </li>
              <li className="flex items-center space-x-3 text-insper-gray">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium">(11) 4504-2400</span>
              </li>
              <li className="flex items-center space-x-3 text-insper-gray">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Rua Quatá, 300 - Vila Olímpia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-insper-gray">
            © 2024 Hub Entidades Insper. Desenvolvido para conectar e fortalecer a comunidade estudantil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
