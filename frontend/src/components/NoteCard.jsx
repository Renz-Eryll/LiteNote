import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const NoteCard = ({ note, setNotes }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteConfirm = async () => {
    try {
      setDeleting(true);
      await api.delete(`/notes/${note._id}`);
      setNotes((prev) => prev.filter((n) => n._id !== note._id));
      toast.success("Note deleted successfully");
      setShowConfirm(false);
    } catch (error) {
      console.error("Error deleting note", error);
      toast.error("Failed to delete note");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <Link
        to={`/note/${note._id}`}
        className="card bg-dark hover:shadow-lg transition-all duration-200 
        border-1 border-b-6 border-solid border-primary"
      >
        <div className="card-body">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <PenSquareIcon className="size-4" />
              <button
                type="button"
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => {
                  e.preventDefault(); // prevent Link navigation
                  setShowConfirm(true);
                }}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Delete Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-base-100 rounded-lg p-6 w-80 shadow-lg space-y-4">
            <h3 className="text-lg font-medium text-base-content">
              Confirm Delete
            </h3>
            <p className="text-sm text-base-content/70">
              Are you sure you want to delete this note?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => setShowConfirm(false)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={handleDeleteConfirm}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteCard;
