import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user; //객체 분해(객체 밖으로 변수들을 꺼냄)
  //id로 유저 정보를 가져오는 함수
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data); //가져온 유저정보를 유저객체에 저장
  };
  useEffect(() => {
    loadUsers();
  }, []); //처음 한번 실행
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">유저 정보</h2>

          <div className="card">
            <div className="card-header">
              유저ID : {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>이름 : {name} </b>
                </li>
                <li className="list-group-item">
                  <b>유저네임 : {username} </b>
                </li>
                <li className="list-group-item">
                  <b>이메일 : {email} </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            돌아기기
          </Link>
        </div>
      </div>
    </div>
  );
}
