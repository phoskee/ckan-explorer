import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CKANResponse, Package, Tag } from "@/types/ckan";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { apiGet } from "@/app/api/base";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const id = params.id;

  const response: CKANResponse = await apiGet('tag_show', { id, include_datasets: true });
  console.info(response);

  const tag: Tag = response.result;
  const packages = tag.packages || [];

  return (
    <Card className="container h-[90svh]">
      <CardHeader>
        <CardTitle>
          <h2>{tag.display_name}</h2>
          <div className="flex gap-2 text-muted-foreground">
            <h3>{tag.state}</h3>
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
                  <TableCell className="font-medium">Identificativo</TableCell>
                  <TableCell>{tag.id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nome</TableCell>
                  <TableCell>{tag.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Stato</TableCell>
                  <TableCell>{tag.state}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ScrollArea>

        <ScrollArea className="border rounded-md p-2 w-[55svw] h-[70svh]">
          <h2 className="text-xl font-semibold mb-2">Risorse</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Azione</TableHead>
                <TableHead>Nome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.length > 0 ? (
                packages.map((dataset: Package) => (
                  <TableRow key={dataset.id}>
                    <TableCell>
                      <Link href={`/package/${dataset.id}`} target="_blank">
                        <EyeIcon className="w-4 h-4" />
                      </Link>
                    </TableCell>
                    <TableCell>{dataset.title}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Nessun pacchetto disponibile
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
