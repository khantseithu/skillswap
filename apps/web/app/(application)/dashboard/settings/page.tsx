import { Button } from "@repo/ui/src/button";
import { Label } from "@repo/ui/src/label";
import { Input } from "@repo/ui/src/input";

export default function Page() {
  return (
    <div className="divide-y divide-white/5">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-primary dark:text-white">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Use a permanent address where you can receive mail.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-x-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
              />
              <div>
                <button
                  type="button"
                  className="rounded-md dark:bg-white/10 px-3 py-2 text-sm font-semibold text-primary dark:text-white shadow-sm dark:hover:bg-white/20"
                >
                  Change avatar
                </button>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="last-name">Last Name</Label>
              <Input type="last-name" id="last-name" placeholder="Doe" />
            </div>

            <div className="sm:col-span-3">
              <Label htmlFor="first-name">First Name</Label>
              <Input type="first-name" id="first-name" placeholder="John" />
            </div>

            <div className="col-span-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="johndoe@skillswap.org"
              />
            </div>

            <div className="col-span-full">
              <Label htmlFor="bio">Bio</Label>
              <Input
                type="bio"
                id="bio"
                placeholder="I'm a software engineer."
              />
            </div>
          </div>

          <div className="mt-8 flex">
            <Button>Save</Button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-primary dark:text-white">
            Change password
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Update your password associated with your account.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <Label htmlFor="current-password">Current password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  id="current-password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="col-span-full">
              <Label htmlFor="new-password">New password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  id="new-password"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="col-span-full">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  id="confirm-password"
                  autoComplete="new-password"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <Button>Save</Button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-primary dark:text-white">
            Log out other sessions
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Please enter your password to confirm you would like to log out of
            your other sessions across all of your devices.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <Label htmlFor="logout-password">Your Password</Label>
              <div className="mt-2">
                <Input
                  type="password"
                  id="logout-password"
                  autoComplete="current-password"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <Button>Log out other sessions</Button>
          </div>
        </form>
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-primary dark:text-white">
            Delete account
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            No longer want to use our service? You can delete your account here.
            This action is not reversible. All information related to this
            account will be deleted permanently.
          </p>
        </div>

        <form className="flex items-start md:col-span-2">
          <Button>Yes, delete my account</Button>
        </form>
      </div>
    </div>
  );
}
