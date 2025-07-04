
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Entity } from "@/hooks/useEntities";
import EntityIcon from "@/components/EntityIcon";

interface EntityCardProps {
  entity: Entity;
  featured?: boolean;
}

const EntityCard = ({ entity, featured = false }: EntityCardProps) => {
  return (
    <Card className={`group hover-lift card-shadow hover:card-shadow-hover transition-all duration-300 smooth-focus ${
      featured ? "ring-2 ring-primary/30 bg-insper-red-light" : "bg-white"
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <EntityIcon 
                  iconUrl={entity.icon_url} 
                  className="text-insper-gray-dark" 
                  size="md"
                />
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 text-insper-gray-dark">
                {entity.name}
              </CardTitle>
            </div>
            <Badge variant="secondary" className="text-xs font-medium bg-insper-gray-light text-insper-gray-dark">
              {entity.category}
            </Badge>
          </div>
          {featured && (
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white font-medium shadow-sm">
              Destaque
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-insper-gray text-sm leading-relaxed line-clamp-3">
          {entity.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {entity.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-insper-gray/20 text-insper-gray-dark hover:border-primary/50 transition-colors">
              {tag}
            </Badge>
          ))}
          {entity.tags && entity.tags.length > 3 && (
            <Badge variant="outline" className="text-xs border-insper-gray/30 text-insper-gray">
              +{entity.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-insper-gray">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="font-medium">{entity.members} membros</span>
            </div>
            {entity.founded && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{entity.founded}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex space-x-1">
            {entity.instagram && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-8 w-8 hover:bg-pink-50 smooth-focus"
                aria-label="Instagram"
                asChild
              >
                <a href={`https://instagram.com/${entity.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </a>
              </Button>
            )}
            {entity.linkedin && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-8 w-8 hover:bg-blue-50 smooth-focus"
                aria-label="LinkedIn"
                asChild
              >
                <a href={`https://linkedin.com/company/${entity.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
              </Button>
            )}
            {entity.email && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2 h-8 w-8 hover:bg-gray-50 smooth-focus"
                aria-label="Email"
                asChild
              >
                <a href={`mailto:${entity.email}`}>
                  <Mail className="w-4 h-4 text-insper-gray" />
                </a>
              </Button>
            )}
          </div>
          
          <Link to={`/entidades/${entity.id}`}>
            <Button 
              variant="outline" 
              size="sm" 
              className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 smooth-focus font-medium"
            >
              Ver mais
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default EntityCard;
