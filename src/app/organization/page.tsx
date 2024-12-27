import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiGet } from "@/app/api/base";
import { listOrganizations } from "../api/organizations";

export default async function OrganizationPage() {
  const response = await listOrganizations();

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Organizzazioni</CardTitle>
        </CardHeader>
        <CardContent>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
