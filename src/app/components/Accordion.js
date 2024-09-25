"use client";

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export function Accordion({
  closeLabel = "Close", // 닫힐 때 표시할 텍스트
  openLabel = "Open", // 열릴 때 표시할 텍스트
  contents, // 아코디언 내부 내용
  defaultExpanded = false, // 초기 아코디언 상태
  duration = 500, // 애니메이션 지속 시간 (ms)
  className = "", // 추가적인 사용자 정의 클래스
  onToggle = () => {} // 아코디언 상태 변화 시 호출될 콜백 함수
}) {
  // 아코디언 상태와 높이 관리
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [maxHeight, setMaxHeight] = useState(defaultExpanded ? 'none' : '0px');
  const accordionRef = useRef(null);

  useEffect(() => {
    // 초기 상태에 따른 maxHeight 설정
    if (defaultExpanded) {
      setMaxHeight(`${accordionRef.current.scrollHeight}px`);
    }
  }, [defaultExpanded]);

  // 아코디언을 토글하는 함수
  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
    setMaxHeight(isExpanded ? '0px' : `${accordionRef.current.scrollHeight}px`);
    onToggle(!isExpanded); // 아코디언 상태 변경 시 콜백 호출
  };

  // 인라인 스타일 객체 정의
  const accordionStyle = {
    overflow: 'hidden',
    transition: `max-height ${duration}ms ease-in-out`,
    maxHeight: maxHeight,
  };

  return (
    <div className={`accordion-container ${className}`}>
      <button onClick={toggleAccordion} className="w-full">
        {isExpanded ? closeLabel : openLabel}
      </button>
      <div className="accordion-content inline-block" >
        <div ref={accordionRef} style={accordionStyle}>
          {contents}
        </div>
      </div>
    </div>
  );
}

// PropTypes를 이용한 타입 검증
Accordion.propTypes = {
  closeLabel: PropTypes.string,
  openLabel: PropTypes.string,
  contents: PropTypes.node.isRequired,
  defaultExpanded: PropTypes.bool,
  duration: PropTypes.number,
  className: PropTypes.string,
  onToggle: PropTypes.func,
};
