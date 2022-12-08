import React from "react";
import { Todolos } from "./Interfaces";

interface Props {
    task: Todolos;
    onDelete: () => void;
};

export default function TodoTable ({task, onDelete}: Props, props: any) {
    return(
        <div>
        <table>
            <tbody>
                <tr>
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td>{task.priority}</td>
                    <td><input type="button" value="Delete" onClick={onDelete} /></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
};
