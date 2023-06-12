import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdPayment } from "react-icons/md";


const SelectedClassTable = ({cls, handleDelete}) => {
    const {_id, class_name, photo, price, instructor } = cls;

    return (
        <div>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        
                    </div>
                </td>
                <td>{class_name}</td>
                <td>{instructor}</td>
                <td>${price}</td>
                <td>
                    <div className="flex gap-8 text-2xl items-center">
                        <button onClick={() => handleDelete(_id)}><AiFillDelete/></button>
                        <Link to={`/update/${_id}`}><button><MdPayment/></button></Link>
                    </div>
                </td>
            </tr>
        </tbody>
        </div>
    );
};

export default SelectedClassTable;