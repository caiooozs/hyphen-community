import { Separator } from "../ui/separator";
export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center bg-white text-black py-2 px-8">
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <Separator orientation="horizontal" />
        <div>
          <p className="italic text-xs text-black">
            © {new Date().getFullYear()} Hyphen Community. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
