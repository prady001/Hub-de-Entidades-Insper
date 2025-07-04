
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EntityForm from "@/components/EntityForm";
import { useEntity, useUpdateEntity, CreateEntityData } from "@/hooks/useEntities";
import { Skeleton } from "@/components/ui/skeleton";

const EditEntity = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: entity, isLoading } = useEntity(id!);
  const updateEntityMutation = useUpdateEntity();

  const handleSubmit = (data: CreateEntityData) => {
    if (!id) return;
    
    updateEntityMutation.mutate({ id, data }, {
      onSuccess: () => {
        navigate(`/entidades/${id}`);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-96" />
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!entity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Entidade não encontrada</h1>
            <p className="text-gray-600">A entidade que você está tentando editar não existe.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Editar Entidade</h1>
          <p className="text-gray-600">
            Atualize as informações da entidade {entity.name}
          </p>
        </div>
        
        <EntityForm
          initialData={entity}
          onSubmit={handleSubmit}
          isLoading={updateEntityMutation.isPending}
          submitLabel="Atualizar Entidade"
        />
      </div>

      <Footer />
    </div>
  );
};

export default EditEntity;
