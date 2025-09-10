export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
              Y
            </span>
            <span className="font-semibold">YourSpace</span>
          </div>
          <nav className="flex gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900">
              Status
            </a>
            <a href="#" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
        <p className="text-xs text-slate-500 mt-6">
          © {new Date().getFullYear()} YourSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
