import {Button} from "@/components/ui/button.tsx";
import {LoginForm} from "@/components/login-form.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";
import {default as C} from "@/components/chart-radial-simple.tsx";

function App() {

  return (
    <>
      <div>
          <Button>Click me</Button>
      </div>
        <div>
            <AppSidebar/>
            <LoginForm/>
            <C/>
        </div>
    </>
  )
}

export default App
