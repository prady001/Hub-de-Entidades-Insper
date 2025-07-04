
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Users, Calendar, Mail, Instagram, Linkedin, MapPin, User, Edit } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEntity } from "@/hooks/useEntities";
import { Skeleton } from "@/components/ui/skeleton";

const EntityDetail = () => {
  const { id } = useParams();
  const { data: entityData, isLoading, error } = useEntity(id!);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !entityData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Entidade não encontrada</h1>
            <p className="text-xl text-gray-600 mb-8">
              A entidade que você está procurando não existe ou foi removida.
            </p>
            <Link to="/entidades">
              <Button className="bg-gradient-to-r from-insper-blue to-insper-green text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar às Entidades
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const entity = entityData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/entidades">
          <Button variant="ghost" className="hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar às Entidades
          </Button>
        </Link>
      </div>

      {/* Entity Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-4xl font-bold text-gray-900">{entity.name}</h1>
                  <Badge className="bg-gradient-to-r from-insper-blue to-insper-green text-white">
                    {entity.category}
                  </Badge>
                </div>
                
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {entity.long_description || entity.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {entity.tags?.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-insper-blue/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-insper-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Membros</p>
                      <p className="font-semibold text-gray-900">{entity.members || 0}</p>
                    </div>
                  </div>
                  
                  {entity.founded && (
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-insper-green/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-insper-green" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fundada em</p>
                        <p className="font-semibold text-gray-900">{entity.founded}</p>
                      </div>
                    </div>
                  )}
                  
                  {entity.president && (
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-insper-blue/10 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-insper-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Presidente</p>
                        <p className="font-semibold text-gray-900">{entity.president}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Contact Card */}
              <div className="lg:w-80">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Entre em Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {entity.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <a href={`mailto:${entity.email}`} className="text-insper-blue hover:underline">
                            {entity.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {entity.instagram && (
                      <div className="flex items-center space-x-3">
                        <Instagram className="w-5 h-5 text-pink-600" />
                        <div>
                          <p className="text-sm text-gray-500">Instagram</p>
                          <a href={`https://instagram.com/${entity.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-insper-blue hover:underline">
                            {entity.instagram}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {entity.linkedin && (
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-500">LinkedIn</p>
                          <a href={`https://linkedin.com/company/${entity.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-insper-blue hover:underline">
                            {entity.linkedin}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-insper-blue to-insper-green text-white">
                        Participar da Entidade
                      </Button>
                      <Link to={`/admin/entities/edit/${entity.id}`} className="block">
                        <Button variant="outline" className="w-full">
                          <Edit className="w-4 h-4 mr-2" />
                          Editar Entidade
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {entity.events && entity.events.length > 0 && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Próximos Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {entity.events.map((event: any) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                            </div>
                            {event.location && (
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Mais Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default EntityDetail;
