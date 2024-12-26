import { getGroupShow } from "@/app/api/groups";
import { getPackageShow } from "@/app/api/packages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GroupInfo, Package, Resource } from "@/types/ckan";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";


interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const id = params.id;

  const response = await getPackageShow({ id }); // TODO: aggiungere commenti
  console.info(response);
  
  const dataset: Package = response.result;  // il tuo oggetto dataset

  return (
    <Card className="container h-[90svh]">
      <CardHeader>
        <CardTitle>
          <h2>{dataset.title}</h2>
          <div className="flex gap-2 text-muted-foreground">
            <h3>{dataset.num_resources} risorse</h3>
            <h3>•</h3>
            <h3>{dataset.num_tags} tag</h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <ScrollArea className="flex flex-col gap-2 border rounded-md p-2 w-[40svw] h-[70svh]">
          <div className="w-fit">
            <h2 className="text-xl font-semibold mb-2">
              Informazioni Principali
            </h2>
            <Table className="w-fit">
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Nome</TableCell>
                  <TableCell>{dataset.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Stato</TableCell>
                  <TableCell>{dataset.state}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Licenza</TableCell>
                  <TableCell>{dataset.license_title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Metadata Creato</TableCell>
                  <TableCell>{dataset.metadata_created}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Metadata Modificato
                  </TableCell>
                  <TableCell>{dataset.metadata_modified}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Versione</TableCell>
                  <TableCell>{dataset.version || "Non specificata"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Titolo</TableCell>
                  <TableCell>{dataset.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Autore</TableCell>
                  <TableCell>{dataset.author}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Email Autore</TableCell>
                  <TableCell>{dataset.author_email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maintainer</TableCell>
                  <TableCell>{dataset.maintainer}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Email Maintainer
                  </TableCell>
                  <TableCell>{dataset.maintainer_email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="w-fit">
            <h2 className="text-xl font-semibold mb-2">Organizzazione</h2>
            <Table className="w-fit">
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    ID Organizzazione
                  </TableCell>
                  <TableCell>{dataset.owner_org}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {dataset.notes && (
            <div className="w-fit">
              <h2 className="text-xl font-semibold mb-2">Descrizione</h2>
              <p className="text-muted-foreground text-sm">{dataset.notes}</p>
            </div>
          )}

          <div className="w-fit">
            <h2 className="text-xl font-semibold mb-2">Tag</h2>
            <div className="flex flex-wrap gap-2">
              {dataset.tags.map((tag: any, index: number) => (
                <Link key={index} href={`/tag/${tag.id}`}>
                  <Badge variant="secondary">{tag.name}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </ScrollArea>

        <ScrollArea className="border rounded-md p-2 w-[55svw] h-[70svh]">
          <h2 className="text-xl font-semibold mb-2">Risorse</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Azione</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Formato</TableHead>
                <TableHead>Dimensione</TableHead>
                <TableHead>Ultima Modifica</TableHead>
                <TableHead>Descrizione</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataset.resources.map((resource: Resource) => (
                <TableRow key={resource.id}>
                  <TableCell>
                    <Link href={resource.url} target="_blank">
                      <EyeIcon className="w-4 h-4" />
                    </Link>
                  </TableCell>
                  <TableCell>
                    {resource.name || "Nessun nome"}
                  </TableCell>
                  <TableCell>{resource.format}</TableCell>
                  <TableCell>{resource.size || "N/A"}</TableCell>
                  <TableCell>{resource.last_modified || "N/A"}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {resource.description || "Nessuna descrizione"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
