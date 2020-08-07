# TeamProject

#### :pushpin: 개발사항
1. 로그인 / 회원가입 / 내정보 :man: 김선규
2. 상품등록 / 상품랜딩 / 상품상세 / 결제상세 :woman: 어성미 :man: 김선규
3. 상품관리 / 상품수정 :woman: 어성미
4. 회원 구매내역 / 판매자 판매내역 :man: 김선규
5. 리뷰
6. 이메일인증 (API) :heavy_exclamation_mark: 보류
7. 사업자번호인증 (API) :woman: 어성미
8. 결제 (API) :man: 김선규
9. 배송추적 (API) :woman: 어성미
10. 챗봇 (API)

#### :pushpin: 수정사항
1_1. 작성해 할 리듀서 - Seller:sellhistory, postNumberUpdate :man: 김선규 <br>

#### :memo: 공동구매
1. 상품등록페이지 - 딜인원 입력
2. 딜인원 - 딜생성
3. 상품랜딩페이지 - 딜목록
4. 상품상세페이지 - 참여버튼
5. 참여버튼 클릭 - modal
6. 참여 - DB 참여완료 데이터 저장
7. 할인가 구매가능 권한부여
8. Deal Schema - 참여아이디 검색 - isComplete(true/false)로 확인 - 확인시 결제가능

#### :memo: 결제상세
1. 결제완료 - payment 저장
2. 판매자 - 판매완료내역 / 상품정보 / 데이터 (상품등록 USER_ID, PRODUCT_ID, 송장번호) :heavy_exclamation_mark: UPDATE
3. 구매자 - 내가 구매한 상품 내역 (USER_ID, PRODUCT_ID)