"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';

// md: 를 기준으로 모바일 pc 분리
export const Sidebar = () => {
    // 사용자 상태를 관리하는 useState
    const [menu, setMenu] = useState(null); // 메뉴 정보
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 오류 상태

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    // API를 통해 사용자 정보를 가져오는 함수
    const fetchUserData = async () => {
        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/adm/menu/myMenu`);

            if (!response.ok) {
                throw new Error('menu data could not be fetched');
            }

            const data = await response.json();

            if (data?.status === "Y") {
                console.log("menu: ", data);
                console.log("menu.data: ", data.data);
                setMenu(data.data); // 사용자 정보 설정
            }

        } catch (error) {
            setError(error.message); // 에러 처리
        } finally {
            setLoading(false); // 로딩 상태 해제
        }
    };

    // 컴포넌트가 마운트될 때 API 호출
    useEffect(() => {
        fetchUserData();

    }, []);

    if (loading) {
        // return <div>Loading...</div>;
    }

    if (error) {
        // return <div>Error: {error}</div>;
    }

    return (
        <>
            {/* 모바일 상단바 */}
            <div className="bg-gray-800 text-white p-4 flex justify-between items-center md:hidden fixed w-full top-0 z-50 h-16">
                <div className="text-2xl font-bold">My Sidebar</div>
                <button onClick={toggleSidebar}>
                    {isOpen ? "" : "≡"}
                </button>
            </div>

            {/* 사이드바 */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform h-[100vh] ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:flex md:flex-col z-50`} // z-50 추가
            >
                <div className="text-2xl font-bold mb-4">My Sidebar</div>
                <nav className="flex-1">
                    <ul>
                        {menu && menu?.map((item, index) => (

                            <li key={index} className="p-4 my-1 rounded-lg hover:bg-gray-700 ">
                                <Link href={`/`+item?.am_url}>{item?.am_name}</Link>
                            </li>

                        ))}

                        <li className="p-4 my-1 rounded-lg hover:bg-gray-700 ">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 my-1 rounded-lg hover:bg-gray-700 ">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-4 my-1 rounded-lg hover:bg-gray-700 ">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* 오버레이: 모바일에서 메뉴가 열렸을 때 배경을 클릭하면 닫히도록 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-40" // z-40 추가
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* 빈 공간을 추가하여 상단바가 다른 콘텐츠를 가리지 않도록 설정 */}
            <div className="pt-16 md:pt-0">
            </div>
        </>
    );
};