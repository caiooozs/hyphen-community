export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center bg-blue-900 py-2 px-8">
      <div className="flex gap-2 w-full justify-center items-center">
        <div>
          <p className="italic text-xs text-white">
            © {new Date().getFullYear()} Hyphen Community. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
