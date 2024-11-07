"use client";

import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function AdmLoginPage() {
  useEffect(() => {
    // 페이지가 로드될 때 쿠키를 설정합니다.

    Cookies.set("adm_login", "true!!", { expires: 7, domain: '', sameSite: 'None', secure: true });


    const _CCokiesAll = Cookies.get();

    console.log("_CCokiesAll : ", _CCokiesAll)

    // 7일 동안 유지되고 다른 도메인에서도 접근 가능한 쿠키
  }, []);

  return (
    <div>next 하자 login!!</div>
  );
}