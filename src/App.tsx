import Button from "./components/Button";
import { Icon } from "@iconify/react";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto w-6/12 mt-5">
        <div className="mt-2 p-6 w-full bg-slate-300 dark:bg-slate-800 rounded-md grid grid-cols-2 gap-5">
          <section className="p-2 bg-white dark:bg-slate-600 dark:text-white rounded-md">
            <h1 className="text-center">Basic</h1>

            <hr />

            <div className="p-4  flex flex-row justify-evenly items-center gap-2 ">
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
            </div>
          </section>

          <section className="p-2 bg-white dark:bg-slate-600 dark:text-white rounded-md">
            <h1 className="text-center">Size</h1>

            <hr />

            <div className="p-4  flex flex-row justify-evenly items-center gap-2 ">
              <Button size="sm">Small</Button>
              <Button size="md" color="primary">
                Primary
              </Button>
              <Button size="lg" color="secondary">
                Secondary
              </Button>
            </div>
          </section>

          <section className="p-2 bg-white dark:bg-slate-600 dark:text-white rounded-md">
            <h1 className="text-center">Icon Button</h1>

            <hr />

            <div className="p-4  flex flex-row justify-evenly items-center gap-2 ">
              <Button
                startIcon={<Icon icon="noto:weary-cat" fontSize={20} />}
                size="md"
              >
                Left icon
              </Button>
              <Button
                endIcon={<Icon icon="openmoji:hacker-cat" fontSize={24} />}
                size="md"
                color="primary"
              >
                Right icon
              </Button>
            </div>
          </section>

          <section className="p-2 bg-white dark:bg-slate-600 dark:text-white rounded-md">
            <h1 className="text-center">Tooltip Button</h1>

            <hr />

            <div className="p-4 flex flex-row justify-center items-center gap-2 flex-wrap">
              <Button
                startIcon={<Icon icon="openmoji:hacker-cat" fontSize={24} />}
                size="md"
                color="primary"
                tooltip={{
                  title: "you are hacked!",
                  placement: "left",
                }}
              >
                Left
              </Button>

              <Button
                endIcon={<Icon icon="noto:weary-cat" fontSize={20} />}
                size="md"
                color="secondary"
                tooltip={{
                  title: "whaat!",
                  placement: "right",
                }}
              >
                Right
              </Button>

              <Button
                endIcon={<Icon icon="noto:weary-cat" fontSize={20} />}
                size="md"
                color="secondary"
                tooltip={{
                  title: "whaat!",
                  placement: "bottom",
                }}
              >
                Bottom
              </Button>

              <Button
                endIcon={<Icon icon="noto:weary-cat" fontSize={20} />}
                size="md"
                color="secondary"
                tooltip={{
                  title: "whaat!",
                  placement: "top",
                }}
              >
                Top
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
