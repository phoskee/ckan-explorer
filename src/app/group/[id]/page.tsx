
import { apiGet } from "@/app/api/base";
import { getGroupShow } from "@/app/api/groups";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GroupInfo, Package } from "@/types/ckan";
import { EyeIcon } from "lucide-react";
import Link from "next/link";


interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const id = params.id;

  const response = await getGroupShow({ id, include_datasets: true });
  console.info(response);
  const group: GroupInfo = response.result;

  return (
    <Card className="container h-[90svh]">
      <CardHeader>
        <CardTitle>
          <h1>{group.display_name}</h1>
          <h3 className="text-muted-foreground">
            {group.package_count} datasets
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <div className="flex flex-col gap-2 border rounded-md p-2 w-[30svw]">
          <div className="w-fit">
            <h2>Main Information</h2>
            <Table className="w-fit">
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{group.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State</TableCell>
                  <TableCell>{group.state}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{group.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Is Organization</TableCell>
                  <TableCell>{group.is_organization ? "Yes" : "No"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Approval Status</TableCell>
                  <TableCell>{group.approval_status}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of Followers</TableCell>
                  <TableCell>{group.num_followers}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Linked Datasets</TableCell>
                  <TableCell>{group.package_count}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Creation Date</TableCell>
                  <TableCell>
                    {new Date(group.created).toLocaleDateString("en-US")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            {group.image_display_url && (
              <div className="mb-4">
                <img
                  src={group.image_display_url}
                  alt={`${group.display_name} logo`}
                  className="max-w-xs rounded-lg shadow-md"
                />
              </div>
            )}

            {group.description && (
              <div className="w-fit">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground text-sm">
                  {group.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <ScrollArea className="h-[70svh] border rounded-md p-2 w-[65svw]">
          <h2>Datasets</h2>
          <Table>
            <TableBody>
              {group.packages.map((dataset: Package) => (
                <TableRow key={dataset.id}>
                  <TableCell>
                    <Link href={`/package/${dataset.id}`}>
                      <EyeIcon className="w-4 h-4" />
                    </Link>
                  </TableCell>
                  <TableCell>{dataset.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
