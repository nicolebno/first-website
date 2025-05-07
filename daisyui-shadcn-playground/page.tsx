// FILE: app/daisyui-shadcn-playground/page.tsx
import { Button as ShadcnButton } from "@/components/ui/button"; // shadcn/ui Button
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // shadcn/ui Card
// IMPORT SHADCN/UI AVATAR HERE IF YOU CHOOSE IT
// For example:
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PlaygroundPage() {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-6">DaisyUI & shadcn/ui Playground</h1>
        <p className="text-lg">
          This page demonstrates using components from both DaisyUI and shadcn/ui.
        </p>
      </section>

      {/* DaisyUI Components Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">DaisyUI Components</h2>
        <div className="space-y-6"> {/* Main container for DaisyUI examples */}
          <div>
            <h3 className="text-xl font-medium mb-2">DaisyUI Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn">Default Button</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
              <button className="btn btn-outline btn-success">Success Outline</button>
              <button className="btn btn-error btn-sm">Small Error</button>
              <button className="btn btn-warning btn-xs">Extra Small Warning</button>
              <button className="btn btn-info btn-lg">Large Info</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">DaisyUI Alert</h3>
            <div className="alert alert-success shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your purchase has been confirmed!</span>
              </div>
            </div>
            <div className="alert alert-warning shadow-lg mt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>Warning: Invalid email address!</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">DaisyUI Card</h3>
            <div className="card w-96 bg-base-100 shadow-xl"> {/* DaisyUI Card */}
              <figure><img src="https://placehold.co/400x225/A0C4FF/333333?text=DaisyUI" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  DaisyUI Card Title!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>

          {/* --- DaisyUI Avatar Implementation --- */}
          {/* This is where the avatar code should go */}
          <div>
            <h3 className="text-xl font-medium mb-2">DaisyUI Avatar</h3>
            <div className="flex items-center space-x-4"> {/* Added flex for layout of multiple avatars */}
              {/* Your DaisyUI avatar snippets are now correctly placed here: */}
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                  <span className="text-3xl">D</span>
                </div>
              </div>
              <div className="avatar avatar-online avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-16 rounded-full">
                  <span className="text-xl">AI</span>
                </div>
              </div>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <span>SY</span>
                </div>
              </div>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">UI</span>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End of space-y-6 for DaisyUI components */}
      </section> {/* End of DaisyUI Components Section */}


      {/* shadcn/ui Components Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">shadcn/ui Components</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">shadcn/ui Button</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ShadcnButton>Default Button</ShadcnButton>
              <ShadcnButton variant="destructive">Destructive</ShadcnButton>
              <ShadcnButton variant="outline">Outline</ShadcnButton>
              <ShadcnButton variant="secondary">Secondary</ShadcnButton>
              <ShadcnButton variant="ghost">Ghost</ShadcnButton>
              <ShadcnButton variant="link">Link</ShadcnButton>
              <ShadcnButton size="lg">Large Button</ShadcnButton>
              <ShadcnButton size="sm">Small Button</ShadcnButton>
              <ShadcnButton disabled>Disabled</ShadcnButton>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">shadcn/ui Card</h3>
            <Card className="w-[350px]"> {/* shadcn/ui Card */}
              <CardHeader>
                <CardTitle>shadcn/ui Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is the content area of a shadcn/ui card. It's built using composable parts.</p>
                <img src="https://placehold.co/300x150/C084FC/FFFFFF?text=shadcn/ui" alt="shadcn placeholder" className="mt-4 rounded-md"/>
              </CardContent>
            </Card>
          </div>

          {/* ADD SHADCN/UI AVATAR CODE HERE */}
          <div>
            <h3 className="text-xl font-medium mb-2">shadcn/ui Avatar</h3>
            {/* Your shadcn/ui Avatar JSX snippet goes here */}
            {/* Example (make sure to import Avatar, AvatarImage, AvatarFallback at the top):
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="ml-4">
              <AvatarImage src="https://placehold.co/100x100/shadcn/FFFFFF?text=User" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            */}
          </div>
        </div>
      </section>
    </div>
  );
}
