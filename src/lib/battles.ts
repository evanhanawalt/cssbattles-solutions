import path from "path";
import fs from "fs";
export const battlesDirectory = path.join(process.cwd(), "src", "battles");

export function getAllBattles(): Array<{ id: string; contents: string }> {
  const fileNames = fs.readdirSync(battlesDirectory).sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });
  return fileNames.map((fileName) => {
    const fullPath = path.join(battlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const id = fileName.replace(/\.html$/, "");
    return { id: id, contents: fileContents };
  });
}

export function getBattlePaths(): Array<{ params: { id: string } }> {
  const fileNames = fs.readdirSync(battlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.html$/, ""),
      },
    };
  });
}

export function getBattle(id: string): { id: string; contents: string } {
  const fullPath = path.join(battlesDirectory, `${id}.html`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return {
    id: id,
    contents: fileContents,
  };
}
