
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-insper-blue to-insper-green text-white">
              <MessageSquare className="w-4 h-4 mr-1" />
              Entre em Contato
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fale <span className="text-gradient">Conosco</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tem sugestões, dúvidas ou quer contribuir com o projeto? 
              Estamos aqui para ouvir você e melhorar juntos o ecossistema de entidades do Insper.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-2 text-insper-blue" />
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@insper.edu.br"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Sobre o que você gostaria de falar?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Conte-nos mais detalhes sobre sua sugestão, dúvida ou feedback..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-insper-blue to-insper-green text-white hover:opacity-90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-insper-blue/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-insper-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">hub@insper.edu.br</p>
                      <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-insper-green/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-insper-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 4504-2400</p>
                      <p className="text-sm text-gray-500">Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-insper-blue/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-insper-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Endereço</h3>
                      <p className="text-gray-600">Rua Quatá, 300</p>
                      <p className="text-gray-600">Vila Olímpia, São Paulo - SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-insper-green/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-insper-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Horário de Funcionamento</h3>
                      <p className="text-gray-600">Segunda a sexta: 7h às 22h</p>
                      <p className="text-gray-600">Sábado: 8h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Como Contribuir</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Para Entidades</h3>
                      <p className="text-gray-600 text-sm">
                        Quer cadastrar ou atualizar informações da sua entidade? 
                        Entre em contato conosco!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Para Estudantes</h3>
                      <p className="text-gray-600 text-sm">
                        Tem sugestões de melhorias ou encontrou algum erro? 
                        Seu feedback é muito importante!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Para Desenvolvedores</h3>
                      <p className="text-gray-600 text-sm">
                        Interessado em contribuir com o desenvolvimento? 
                        Vamos conversar sobre como você pode ajudar!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como cadastrar minha entidade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Entre em contato conosco através do formulário ou email. Enviaremos 
                  as instruções e o formulário de cadastro.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">As informações são atualizadas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Trabalhamos em parceria com as entidades para manter 
                  todas as informações sempre atualizadas.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como reportar um erro?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Use o formulário de contato ou envie um email detalhando 
                  o erro encontrado. Corrigiremos o mais rápido possível.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso sugerir melhorias?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Claro! Suas sugestões são muito bem-vindas e nos ajudam 
                  a melhorar a plataforma continuamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
