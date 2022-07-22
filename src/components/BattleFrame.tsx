const frameHeader =
  "<head><style>body{overflow:hidden;} html {display:block;}</style></head>";

export default function BattleFrame({ battle }: { battle: string }) {
  return (
    <iframe
      className="w-[400px] h-[300px] border-0 outline-0 box-border block"
      title="preview"
      srcDoc={frameHeader + battle}
    />
  );
}
