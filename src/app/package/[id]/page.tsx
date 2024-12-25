import { getGroupShow, getPackageShow } from "@/actions/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GroupInfo, Package } from "@/types/ckan-type";
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
  
  const dataset = response.result;  // il tuo oggetto dataset

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
            <h2 className="text-xl font-semibold mb-2">Informazioni Principali</h2>
            <Table className="w-fit">
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Identificativo</TableCell>
                  <TableCell>{dataset.identifier}</TableCell>
                </TableRow>
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
                  <TableCell className="font-medium">Frequenza</TableCell>
                  <TableCell>{dataset.frequency}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Data Pubblicazione</TableCell>
                  <TableCell>{dataset.issued}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ultima Modifica</TableCell>
                  <TableCell>{dataset.modified}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Metadata Creato</TableCell>
                  <TableCell>{dataset.metadata_created}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Metadata Modificato</TableCell>
                  <TableCell>{dataset.metadata_modified}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lingua</TableCell>
                  <TableCell>{dataset.language}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Versione</TableCell>
                  <TableCell>{dataset.version || 'Non specificata'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Accesso</TableCell>
                  <TableCell>{dataset.access_rights}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="w-fit">
            <h2 className="text-xl font-semibold mb-2">Organizzazione</h2>
            <Table className="w-fit">
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Nome</TableCell>
                  <TableCell>{dataset.organization.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Titolare</TableCell>
                  <TableCell>{dataset.holder_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ID Titolare</TableCell>
                  <TableCell>{dataset.holder_identifier}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Editore</TableCell>
                  <TableCell>{dataset.publisher_name || dataset.publisher_identifier}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {dataset.notes && (
            <div className="w-fit">
              <h2 className="text-xl font-semibold mb-2">Descrizione</h2>
              <p className="text-muted-foreground text-sm">
                {dataset.notes}
              </p>
            </div>
          )}

          <div className="w-fit">
            <h2 className="text-xl font-semibold mb-2">Temi</h2>
            {JSON.parse(dataset.themes_aggregate).map((theme: any, index: number) => (
              <div key={index} className="mb-2">
                <p>Tema: {theme.theme}</p>
                <p>Sottotemi: {theme.subthemes.join(', ')}</p>
              </div>
            ))}
          </div>

          <div className="w-fit">
            <h2 className="text-xl font-semibold mb-2">Tag</h2>
            <div className="flex flex-wrap gap-2">
              {dataset.tags.map((tag: any, index: number) => (
                <Badge key={index} variant="secondary">
                  {tag.name}
                </Badge>
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataset.resources.map((resource: any) => (
                <TableRow key={resource.id}>
                  <TableCell>
                    <Link href={resource.url} target="_blank">
                      <EyeIcon className="w-4 h-4" />
                    </Link>
                  </TableCell>
                  <TableCell>{resource.name}</TableCell>
                  <TableCell>{resource.format}</TableCell>
                  <TableCell>{resource.size || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
