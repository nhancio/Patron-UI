import { parse } from 'papaparse';

interface Contact {
  name: string;
  company: string;
}

export function generateEmailCombinations(name: string, company: string): string[] {
  const [firstName, lastName] = name.toLowerCase().split(' ');
  const domain = company.toLowerCase();
  
  return [
    `${firstName}.${lastName}@${domain}.com`,
    `${lastName}.${firstName}@${domain}.com`
  ];
}

export function parseExcelData(file: File): Promise<Contact[]> {
  return new Promise((resolve, reject) => {
    parse(file, {
      complete: (results) => {
        const contacts = results.data
          .filter((row: any) => row[0] && row[1]) // Filter out empty rows
          .map((row: any) => ({
            name: row[0].trim(),
            company: row[1].trim()
          }));
        resolve(contacts);
      },
      error: (error) => reject(error),
      header: false,
      skipEmptyLines: true
    });
  });
}