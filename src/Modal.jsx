/* eslint-disable react/prop-types */
import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
        <section className="modal-main bg-white p-8 rounded-md">
          {props.children}
          <button
            className="close absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            type="button"
            onClick={props.onClose}
          >
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
