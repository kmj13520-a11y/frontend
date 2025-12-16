import axios from "axios"; //액시오스 객체
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]); //유저객체 배열
  //백엔드에서 유저들을 가져오는 함수
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  //처음 한번 실행됨
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="container">
      <table className="table table-hover border table-border shadow my-4 text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-outline-secondary mx-2">보기</button>
                <Link
                  to={`/edituser/${user.id}`}
                  className="btn btn-outline-warning mx-2"
                >
                  수정
                </Link>
                <button className="btn btn-outline-danger mx-2">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
