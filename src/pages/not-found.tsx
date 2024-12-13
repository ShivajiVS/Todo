export function NotFound() {
  return (
    <div className="box-border flex items-center justify-center w-full min-h-screen bg-background text-foreground">
      <div className="space-y-3 text-center bg-card">
        <h1 className="font-extrabold text-8xl text-slate-500">404</h1>
        <p className="text-base font-medium md:text-lg lg:text-xl text-muted-foreground">
          Oops! The page youre looking for doesnt exist.
        </p>
      </div>
    </div>
  );
}
