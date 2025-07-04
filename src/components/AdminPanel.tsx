
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Edit, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useEntities, useDeleteEntity, Entity } from "@/hooks/useEntities";

const AdminPanel = () => {
  const { data: entities = [], isLoading } = useEntities();
  const deleteEntityMutation = useDeleteEntity();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [entityToDelete, setEntityToDelete] = useState<Entity | null>(null);

  const handleDeleteConfirm = () => {
    if (entityToDelete) {
      deleteEntityMutation.mutate(entityToDelete.id, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
          setEntityToDelete(null);
        },
      });
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Painel Administrativo</h2>
          <p className="text-gray-600">Gerencie as entidades estudantis</p>
        </div>
        <Link to="/admin/entities/new">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Nova Entidade
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {entities.map((entity) => (
          <Card key={entity.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{entity.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">
                    {entity.category}
                  </Badge>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {entity.description}
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Link to={`/admin/entities/edit/${entity.id}`}>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEntityToDelete(entity);
                      setDeleteDialogOpen(true);
                    }}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {entity.tags?.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {entity.tags && entity.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{entity.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir a entidade "{entityToDelete?.name}"? 
              Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={deleteEntityMutation.isPending}
            >
              {deleteEntityMutation.isPending ? "Excluindo..." : "Excluir"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
