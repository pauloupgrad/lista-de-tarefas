import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  CircleMinus,
  List,
  ListCheck,
  Plus,
  Sigma,
  SquarePen,
  Trash2,
} from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        {/* HEADER INPUT CADASTRO */}
        <CardHeader className="flex gap-2 pt-2 px-2">
          <Input placeholder="Adicionar tarefa" className="text-sm" />
          <Button size={"lg"} className="cursor-pointer">
            <Plus /> Cadastrar
          </Button>
        </CardHeader>
        {/* FIM HEADER INPUT CADASTRO */}

        <CardContent>
          <Separator />

          {/* BADGES BTN INFOS */}
          <div className="flex gap-2 py-4">
            <Badge variant="default" className="cursor-pointer p-3">
              <List /> Todas
            </Badge>
            <Badge variant="outline" className="cursor-pointer p-3">
              <CircleMinus /> Não finalizadas
            </Badge>
            <Badge variant="outline" className="cursor-pointer p-3">
              <Check /> Concluidas
            </Badge>
          </div>
          {/* FIM BADGES BTN INFOS */}

          {/* FIM LISTA TAREFAS */}
          <div className="border-b">
            <div className="h-12 flex justify-between items-center border-t border-r">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm text-muted-foreground">
                Estudar React
              </p>
              <div className="flex gap-2 items-center mr-2">
                {/* DIALOG EDIT */}
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen
                      size={18}
                      className="cursor-pointer text-primary hover:text-primary-hover"
                    />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex items-center gap-2">
                      <Input placeholder="Editar tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                {/* FIM DIALOG EDIT */}

                <Trash2
                  size={18}
                  className="cursor-pointer text-primary hover:text-primary-hover"
                />
              </div>
            </div>
          </div>
          {/* FIM LISTA TAREFAS */}

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-6">
            <p className="flex items-center gap-1 text-xs">
              <ListCheck size={18} /> Tarefas concluídas (3/3)
            </p>

            {/* ALERT DIALOG */}
            <AlertDialog>
              <AlertDialogTrigger asChild={true}>
                <Button
                  size={"sm"}
                  variant="outline"
                  className="cursor-pointer"
                >
                  <Trash2 />
                  Linpar tarefas concluídas
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir X itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {/* FIM ALERT DIALOG */}
          </div>

          {/* BARS PROGRESS */}
          <div className="h-2 w-full mt-4 bg-gray-200 rounded-md">
            <div
              className="h-full bg-blue-400 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>
          {/* FIM BARS PROGRESS */}
          <div className="w-full flex items-center mt-4 justify-end gap-1">
            <Sigma size={16} />
            <p className="text-xs">3 tarefas no total</p>
          </div>

          {/* FIM FOOTER */}
        </CardContent>
      </Card>
    </main>
  );
};
export default Home;
