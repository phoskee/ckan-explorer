import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiGet } from "@/app/api/base";

export default async function OrganizationPage() {
  const response = await apiGet('organization_list');

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
