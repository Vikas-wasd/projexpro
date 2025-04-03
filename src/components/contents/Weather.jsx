"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Weather() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <Card className="w-80 p-4 bg-gray-800 text-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle>Weather</CardTitle>
          <CardDescription>Check the latest forecast</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">🌤 22°C | Partly Cloudy</p>
        </CardContent>
      </Card>
    </div>
  );
}
