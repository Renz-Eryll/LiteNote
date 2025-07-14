import React from "react";
import { Link } from "react-router";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-dark border-b border-base-content/10">
      <div className="mx-auto max-w-4xl p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
              LiteNote
            </h1>
          </div>
          <div>
            <Link to="/create">
              <button className="btn btn-soft btn-primary">
                <span>
                  <Plus className="size-4" />
                </span>
                Create Note
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
