// jeju_places.json 내용 (file:// 로 열어도 동작하도록 스크립트로 복사)
const JEJU_DATA = {
  "region": "제주특별자치도",
  "topic": "제주 카페·맛집",
  "items": [
    {
      "name": "앙뚜아네트",
      "category": "카페",
      "description": "제주공항 근처. 넓은 내부와 통창 너머 바다 풍경, 디저트가 특징.",
      "score": 70,
      "selected": false,
      "source": "https://www.ieconomyu.com/jeju-ocean-view-cafe-spring/"
    },
    {
      "name": "서귀피안베이커리",
      "category": "카페",
      "description": "성산 해안도로 인근. 성산일출봉과 바다를 함께 보며 갓 구운 빵과 커피를 즐기는 빵지순례 코스.",
      "score": 70,
      "selected": false,
      "source": "https://www.ieconomyu.com/jeju-ocean-view-cafe-spring/"
    },
    {
      "name": "웨이뷰 베이커리 카페",
      "category": "카페",
      "description": "한림 협재 지역. 1층·2층·루프탑 모두 바다 전망이며 낙조 명소.",
      "score": 70,
      "selected": false,
      "source": "https://www.ieconomyu.com/jeju-ocean-view-cafe-spring/"
    },
    {
      "name": "하라케케",
      "category": "카페",
      "description": "서귀포 남부 해안. 바다와 수영장이 어우러져 아이와 물놀이하기 좋음.",
      "score": 70,
      "selected": false,
      "source": "https://www.ieconomyu.com/jeju-ocean-view-cafe-spring/"
    },
    {
      "name": "모알보알",
      "category": "카페",
      "description": "제주시 구좌읍 구좌해안로 141(김녕). 동남아풍 인테리어와 오션뷰, 포토존. 노키즈존.",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/sns/article/60163/"
    },
    {
      "name": "비케이브",
      "category": "카페",
      "description": "제주시 조천읍 동백로 122. 선흘 의자동굴, 꽃밭, 숲속 오두막, 직접 양봉한 꿀 음료.",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/sns/article/60163/"
    },
    {
      "name": "레이지펌프",
      "category": "카페",
      "description": "제주시 애월읍 애월북서길 32. 애월 바다뷰, 빈티지 실내, 대표메뉴 말차 크리미.",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/sns/article/60163/"
    },
    {
      "name": "빠빠라기",
      "category": "카페",
      "description": "제주시 중앙로 218 남광빌딩. 1990년부터 영업한 빙수집, 큰 우유 빙수. 월요일 휴무(7~8월 제외).",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/sns/article/60163/"
    },
    {
      "name": "스타벅스 더제주송당파크R점",
      "category": "카페",
      "description": "제주시 구좌읍 비자림로 1197. 현무암을 활용한 대형 매장, 제주 한정 메뉴·굿즈. 2개 출처에서 소개.",
      "score": 80,
      "selected": true,
      "source": "https://hotplacehunter.co.kr/sns/article/60163/"
    },
    {
      "name": "원앤온리",
      "category": "카페",
      "description": "서귀포 안덕면 산방로. 산방산과 황우치해변을 함께 보는 통창 브런치 카페(산방산케이크).",
      "score": 72,
      "selected": false,
      "source": "https://gusle.kr/%EC%84%9C%EA%B7%80%ED%8F%AC-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-%EC%98%A4%EC%85%98%EB%B7%B0-%EA%B0%90%EC%84%B1-%EB%B7%B0%EB%A7%9B%EC%A7%91-5%EA%B3%B3/"
    },
    {
      "name": "사일리커피",
      "category": "카페",
      "description": "서귀포 대정읍 최남단해안로 412. 해안도로 너머 바다·석양·야경, 지중해풍 인테리어.",
      "score": 72,
      "selected": false,
      "source": "https://gusle.kr/%EC%84%9C%EA%B7%80%ED%8F%AC-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-%EC%98%A4%EC%85%98%EB%B7%B0-%EA%B0%90%EC%84%B1-%EB%B7%B0%EB%A7%9B%EC%A7%91-5%EA%B3%B3/"
    },
    {
      "name": "바다바라",
      "category": "카페",
      "description": "서귀포시 중문관광로72번길. 색달해변 절벽 위 파노라마 뷰, 마라도·가파도 조망, 반려견 동반 야외석.",
      "score": 72,
      "selected": false,
      "source": "https://gusle.kr/%EC%84%9C%EA%B7%80%ED%8F%AC-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-%EC%98%A4%EC%85%98%EB%B7%B0-%EA%B0%90%EC%84%B1-%EB%B7%B0%EB%A7%9B%EC%A7%91-5%EA%B3%B3/"
    },
    {
      "name": "인스밀",
      "category": "카페",
      "description": "서귀포 대정읍 일과대수로27번길 22. 옛 보리공장 개조, 제주산 보리 디저트. 10:00~19:00.",
      "score": 72,
      "selected": false,
      "source": "https://gusle.kr/%EC%84%9C%EA%B7%80%ED%8F%AC-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-%EC%98%A4%EC%85%98%EB%B7%B0-%EA%B0%90%EC%84%B1-%EB%B7%B0%EB%A7%9B%EC%A7%91-5%EA%B3%B3/"
    },
    {
      "name": "아줄레주",
      "category": "카페",
      "description": "서귀포시 신풍하동로19번길 59. 제주 속 리스본 콘셉트, 타일 외관, 포르투갈식 에그타르트.",
      "score": 72,
      "selected": false,
      "source": "https://gusle.kr/%EC%84%9C%EA%B7%80%ED%8F%AC-%EC%B9%B4%ED%8E%98-%EC%B6%94%EC%B2%9C-%EC%98%A4%EC%85%98%EB%B7%B0-%EA%B0%90%EC%84%B1-%EB%B7%B0%EB%A7%9B%EC%A7%91-5%EA%B3%B3/"
    },
    {
      "name": "달책빵",
      "category": "카페",
      "description": "소박하고 따뜻한 분위기. 제주산 당근 주스와 당근 케이크.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "카페 아오오",
      "category": "카페",
      "description": "바다 전망 오션뷰 카페. 한라봉 라떼가 대표 메뉴.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "런던 베이글 뮤지엄 제주점",
      "category": "카페",
      "description": "서울 본점으로 유명한 베이글 가게의 제주 지점. 베이글 샌드위치, 독특한 인테리어.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "프릳츠 제주 성산점",
      "category": "카페",
      "description": "성산 일출봉 인근. 감귤 창고를 개조한 오션뷰 스페셜티 커피 카페. 2개 출처에서 소개.",
      "score": 80,
      "selected": true,
      "source": "https://www.elle.co.kr/article/1885649"
    },
    {
      "name": "보룡제과",
      "category": "카페",
      "description": "제주 특산물을 활용한 로컬 베이커리. 한라봉 빵, 감귤 페이스트리.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "카페올름JEJU",
      "category": "카페",
      "description": "넓은 테라스에서 자연 전망. 문어·새우 파스타, 흑돼지 돈까스를 파는 카페 겸 식당.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "몽상드애월",
      "category": "카페",
      "description": "애월 지역 카페. 라떼, 카푸치노, 바닐라라떼 등.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "짐바란비치",
      "category": "카페",
      "description": "애월 지역 카페. 아메리카노, 카페라떼, 카푸치노, 바닐라라떼.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "까미노",
      "category": "카페",
      "description": "애월 지역. 커피와 크루아상·치아바타 등 베이커리, 브런치.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "애월더선셋",
      "category": "카페",
      "description": "애월 지역. 치즈오믈렛, 생과일 프렌치토스트 등 브런치.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "명월국민학교",
      "category": "카페",
      "description": "한림·협재·비양도 권역. 명월차, 티라미슈 라떼, 명월 모카가 대표.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "살롱드라방",
      "category": "카페",
      "description": "애월 지역. 에스프레소 음료와 크림치즈애플 토핑 팬케익.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "봄날",
      "category": "카페",
      "description": "애월 지역. 아메리카노, 콜드브루, 바닐라라떼.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "쉼표",
      "category": "카페",
      "description": "한림·협재·비양도 권역 카페. 아메리카노.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "카페콜라",
      "category": "카페",
      "description": "한림·협재·비양도 권역. 커피콕, 고르곤졸라피자, 에스프레소.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "프롬더럭",
      "category": "카페",
      "description": "애월 지역. 감귤주스, 망고주스, 딸기스무디 등 주스류.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "뉴저지카페",
      "category": "카페",
      "description": "모슬포·대정·한경 권역. 아메리카노, 한라봉에이드.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "볼스카페",
      "category": "카페",
      "description": "서귀포 시내. 에그타르트, 크로아상, 크램브륄레 바닐라크림도넛 + 아메리카노 세트.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "바다다",
      "category": "카페",
      "description": "중문·예래 권역. 커피, 블루레몬에이드, 칵테일, 쿠키, 케이크, 도넛.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "더클리프",
      "category": "카페",
      "description": "중문·예래 권역, 색달비치. 흑돼지 멜젓 파스타, 피자, 클럽버거 등 식사도 가능.",
      "score": 68,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "스월링커피",
      "category": "카페",
      "description": "중문·예래 권역. 말차라떼, 아인슈페너, 딸기라떼.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "옐로우카페",
      "category": "카페",
      "description": "중문·예래 권역. 바나나 라떼, 바나나 아이스크림, 바나나 크림치즈 베이글 등 바나나 메뉴.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "카페마니",
      "category": "카페",
      "description": "월정·평대·세화 권역. 구좌당근주스, 한라봉레몬에이드, 마늬브라운 등.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "카페콧수염",
      "category": "카페",
      "description": "월정·평대·세화 권역. 마카롱, 리얼딸기우유, 제주말차우유.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "미엘드세화",
      "category": "카페",
      "description": "월정·평대·세화 권역. 미엘커피, 당근케이크, 생크림케이크.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "모래비카페",
      "category": "카페",
      "description": "월정·평대·세화 권역. 스페셜티·드립커피, 플랫화이트, 아인슈페너.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "바다는안보여요",
      "category": "카페",
      "description": "구좌·김녕 권역 카페.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "블랑로쉐",
      "category": "카페",
      "description": "성산·우도 권역. 우도 땅콩크림라떼, 땅콩 아이스크림, 땅콩잼.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "아뜰리에안",
      "category": "카페",
      "description": "서귀포 시내. 블랙아일랜드, 법환'92파인애플, 카멜리아봉봉 등 시그니처 음료.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "서양차관",
      "category": "카페",
      "description": "서귀포 시내 찻집. 클래식 블랙티, 로열밀크티, 한라봉 히비스커스 소다, 흑임자양갱.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "서연의집",
      "category": "카페",
      "description": "남원·표선·성읍 권역. 서연의집 케이크, 와플, 머핀.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "메종드오조락",
      "category": "카페",
      "description": "성산·우도 권역 카페. 커피.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "그러므로part2",
      "category": "카페",
      "description": "제주 시내. 메리하하, 레몬차, 진저라떼, 플랫화이트.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "니모메 빈티지라운지",
      "category": "카페",
      "description": "제주 시내. 에스프레소, 아메리카노, 오미자차.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "앨리스",
      "category": "카페",
      "description": "제주 시내. 녹차오름빙수와 녹차오름치즈케익빙수.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "에스프레소라운지",
      "category": "카페",
      "description": "제주 시내. 카페라떼, 카페모카.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "카카듀",
      "category": "카페",
      "description": "제주 시내. 아메리카노, 카페라떼, 카푸치노.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "블리케이크",
      "category": "카페",
      "description": "제주 시내. 제주두부 치즈케이크.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "어반르토아",
      "category": "카페",
      "description": "제주 시내. 리얼망고우유, 플레인 스콘, 자몽빙수.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "마노르블랑",
      "category": "카페",
      "description": "안덕·화순·대평 권역. 아메리카노, 한라봉에이드.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "레이지박스",
      "category": "카페",
      "description": "안덕·화순·대평 권역. 제주당근케이크, 당근주스.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "사계생활",
      "category": "카페",
      "description": "안덕·화순·대평 권역. 산방산카푸치노, 돌담크림모카, 제주말차라떼.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "와토커피",
      "category": "카페",
      "description": "모슬포·대정·한경 권역. 와토 알프스, 우드라떼.",
      "score": 62,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    },
    {
      "name": "이정의댁",
      "category": "카페",
      "description": "서귀포시 예래로144번길 22-1. 이정의케이크, 호우시절, 모찌.",
      "score": 68,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=58403"
    },
    {
      "name": "우유부단",
      "category": "카페",
      "description": "한림 지역. 유기농 우유로 만든 아이스크림.",
      "score": 65,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/local/article/57493/"
    },
    {
      "name": "바람",
      "category": "카페",
      "description": "제주시 구좌읍 월정1길 46-9. 소품샵 겸 카페, 아프리카풍 소품과 빈티지 아이템, 직접 만든 나무 타일 바닥.",
      "score": 68,
      "selected": false,
      "source": "https://www.gqkorea.co.kr/2023/05/22/%ec%a0%9c%ec%a3%bc%ec%9d%98-%eb%8f%99%ec%aa%bd%eb%82%98%eb%9d%bc-%ea%b5%ac%ec%a2%8c%ec%9d%8d-%ec%97%ac%ed%96%89-%ec%a2%8c%ed%91%9c/"
    },
    {
      "name": "카페 오른",
      "category": "카페",
      "description": "서귀포시 성산읍 해맞이해안로 2714. 노출콘크리트 오션뷰, 우도 땅콩 크림 오른 라떼, 약과 아이스크림 라떼.",
      "score": 72,
      "selected": false,
      "source": "https://www.gqkorea.co.kr/2023/05/22/%ec%a0%9c%ec%a3%bc%ec%9d%98-%eb%8f%99%ec%aa%bd%eb%82%98%eb%9d%bc-%ea%b5%ac%ec%a2%8c%ec%9d%8d-%ec%97%ac%ed%96%89-%ec%a2%8c%ed%91%9c/"
    },
    {
      "name": "한동리화수목",
      "category": "카페",
      "description": "제주시 구좌읍 해맞이해안로 1028. 상하목장 유기농 우유 소프트아이스크림, 화수목 모나카.",
      "score": 70,
      "selected": false,
      "source": "https://www.gqkorea.co.kr/2023/05/22/%ec%a0%9c%ec%a3%bc%ec%9d%98-%eb%8f%99%ec%aa%bd%eb%82%98%eb%9d%bc-%ea%b5%ac%ec%a2%8c%ec%9d%8d-%ec%97%ac%ed%96%89-%ec%a2%8c%ed%91%9c/"
    },
    {
      "name": "카페 인사리",
      "category": "카페",
      "description": "제주시 구좌읍 일주동로 2806 2층. 부부 운영 빵·커피 카페, 까눌레·크루아상·잠봉뵈르.",
      "score": 70,
      "selected": false,
      "source": "https://www.gqkorea.co.kr/2023/05/22/%ec%a0%9c%ec%a3%bc%ec%9d%98-%eb%8f%99%ec%aa%bd%eb%82%98%eb%9d%bc-%ea%b5%ac%ec%a2%8c%ec%9d%8d-%ec%97%ac%ed%96%89-%ec%a2%8c%ed%91%9c/"
    },
    {
      "name": "무상찻집",
      "category": "카페",
      "description": "제주산 유기농 녹차 전문. 유기농 말차라떼 6,500원, 아이스크림 추가 가능.",
      "score": 68,
      "selected": false,
      "source": "https://www.elle.co.kr/article/1885649"
    },
    {
      "name": "카페코렛그로울",
      "category": "카페",
      "description": "1970년대 미국 캐주얼·웨스턴 스타일의 빈티지 숍 겸 카페, 오두막 같은 실내.",
      "score": 68,
      "selected": false,
      "source": "https://www.elle.co.kr/article/1885649"
    },
    {
      "name": "숙성도 함덕점",
      "category": "음식점",
      "description": "흑돼지 숙성 고기 전문점. 매일 한정 수량의 특수 부위. 2개 출처에서 소개.",
      "score": 80,
      "selected": true,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "3대국수 본점",
      "category": "음식점",
      "description": "전통 고기국수, 멸치육수 국수, 돼지국밥. 현지인에게 인기.",
      "score": 70,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "톰톰카레",
      "category": "음식점",
      "description": "제주 재료를 쓰는 카레집. 버섯카레, 시금치카레.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "창승포식당",
      "category": "음식점",
      "description": "바다 근처 식당. 해물 전골, 밑반찬 무료 제공.",
      "score": 65,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "어멍횟집",
      "category": "음식점",
      "description": "성산일출봉 근처. 고등어회, 단새우 사시미.",
      "score": 68,
      "selected": false,
      "source": "https://blog.namanecard.com/jeju-restaurants/"
    },
    {
      "name": "매일올레돈",
      "category": "음식점",
      "description": "서귀포시 중앙로62번길 17(올레시장 인근). 흑돼지 오겹살·목살 600g 각 66,000원. 11:00~23:00. 2개 출처에서 소개.",
      "score": 80,
      "selected": true,
      "source": "https://hotplacehunter.co.kr/sns/article/66300/"
    },
    {
      "name": "낭쿰낭쿰",
      "category": "음식점",
      "description": "서귀포시 중앙로79번길 4. 흑돼지 해물갈비전골(2인 43,000원). 화요일 휴무. 2개 출처에서 소개.",
      "score": 80,
      "selected": true,
      "source": "https://hotplacehunter.co.kr/sns/article/66300/"
    },
    {
      "name": "용두암해촌",
      "category": "음식점",
      "description": "제주시 서해안로 614(공항 인근). 갈치조림 2인 55,000원, 전복해물전골.",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=82708"
    },
    {
      "name": "진대감 제주점",
      "category": "음식점",
      "description": "제주시 광평동로 45 1층(노형동). 한우 양지삼합, 한우 김치전골.",
      "score": 68,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=82708"
    },
    {
      "name": "착한집",
      "category": "음식점",
      "description": "제주시 서광로 98. 갈치조림에 갈비·낙지·전복을 곁들인 2인 세트.",
      "score": 68,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=82708"
    },
    {
      "name": "구좌모메존흑돼지",
      "category": "음식점",
      "description": "제주시 구좌읍 세화리. 흑돼지 구이.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "도갈비",
      "category": "음식점",
      "description": "제주시 노형동 759-7. 칼집 낸 숙성 흑돼지 꽃고기.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "상원가든",
      "category": "음식점",
      "description": "서귀포시 대정읍 상모리. 생갈비, 양념갈비, 흑돼지 오겹살.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "솔지식당",
      "category": "음식점",
      "description": "제주시 노형동 2736. 가브리살, 멜조림.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "엠제이돼지",
      "category": "음식점",
      "description": "제주시 용담이동 599-8. 자갈 위에 굽는 오겹살·목살, 돼지순대.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "제주공항그때그집",
      "category": "음식점",
      "description": "제주시 도두이동 706-11. 흑돼지 오겹살·목살 세트.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "큰돈가",
      "category": "음식점",
      "description": "서귀포시 대정읍 상모리 126-7. 연탄구이 제주 근고기, 김치찌개.",
      "score": 68,
      "selected": false,
      "source": "https://v.daum.net/v/EMgSv7vtg1"
    },
    {
      "name": "부뚜막식당",
      "category": "음식점",
      "description": "서귀포시 성산읍 고성오조로 11. 갈치조림 39,000원, 통갈치구이, 성게미역국. 2개 출처에서 소개.",
      "score": 80,
      "selected": true,
      "source": "https://hotplacehunter.co.kr/?p=58403"
    },
    {
      "name": "옥돔식당",
      "category": "음식점",
      "description": "서귀포시 대정읍 신영로36번길 62. 보말전복칼국수.",
      "score": 70,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=58403"
    },
    {
      "name": "맛나식당",
      "category": "음식점",
      "description": "서귀포시 성산읍 동류암로 41. 갈치조림, 고등어조림, 우도땅콩막걸리.",
      "score": 70,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=58403"
    },
    {
      "name": "가시아방국수",
      "category": "음식점",
      "description": "서귀포시 성산읍 섭지코지로 10. 고기국수 9,000원, 돔베고기 33,000원.",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/local/article/57493/"
    },
    {
      "name": "통낭식당",
      "category": "음식점",
      "description": "서귀포시 신서귀로 52. 오리탕 9,000원.",
      "score": 68,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/local/article/57493/"
    },
    {
      "name": "궁서체 제주탑동본점",
      "category": "음식점",
      "description": "제주시 탑동로11길 6, 2층. 통갈치 한상, 순살 갈치 한상.",
      "score": 70,
      "selected": false,
      "source": "https://v.daum.net/v/5OBLMPXSCp"
    },
    {
      "name": "제주칼치집 탑동본점",
      "category": "음식점",
      "description": "제주시 무근성길 6, 1층. 순살갈치조림, 통갈치구이, 한치회 메밀국수가 나오는 한상.",
      "score": 70,
      "selected": false,
      "source": "https://v.daum.net/v/5OBLMPXSCp"
    },
    {
      "name": "색달식당 중문점",
      "category": "음식점",
      "description": "서귀포시 예래로 255-18, 1층. 순살갈치조림, 통갈치구이.",
      "score": 70,
      "selected": false,
      "source": "https://v.daum.net/v/5OBLMPXSCp"
    },
    {
      "name": "동귀리 갈칫집",
      "category": "음식점",
      "description": "공항 인근. 갈치튀김 무한리필, 게우 미역국, 돔베편육 세트.",
      "score": 68,
      "selected": false,
      "source": "https://www.segye.com/view/20210721519663"
    },
    {
      "name": "미영이네 식당",
      "category": "음식점",
      "description": "모슬포항. 고등어회, 고등어탕.",
      "score": 68,
      "selected": false,
      "source": "https://www.segye.com/view/20210721519663"
    },
    {
      "name": "태광식당",
      "category": "음식점",
      "description": "공항 인근. 한치 주물럭.",
      "score": 68,
      "selected": false,
      "source": "https://www.segye.com/view/20210721519663"
    },
    {
      "name": "대도식당",
      "category": "음식점",
      "description": "서귀포. 김치복국.",
      "score": 68,
      "selected": false,
      "source": "https://www.segye.com/view/20210721519663"
    },
    {
      "name": "우진해장국",
      "category": "음식점",
      "description": "제주시 서사로 11. 고사리육개장, 몸국.",
      "score": 72,
      "selected": false,
      "source": "https://hotplacehunter.co.kr/?p=66653"
    },
    {
      "name": "김녕회관",
      "category": "음식점",
      "description": "제주시 김녕로 170. 빈티지 위스키바 겸 식당, 치즈 돈까스와 칵테일, 야외 정원.",
      "score": 65,
      "selected": false,
      "source": "https://www.gqkorea.co.kr/2023/05/22/%ec%a0%9c%ec%a3%bc%ec%9d%98-%eb%8f%99%ec%aa%bd%eb%82%98%eb%9d%bc-%ea%b5%ac%ec%a2%8c%ec%9d%8d-%ec%97%ac%ed%96%89-%ec%a2%8c%ed%91%9c/"
    },
    {
      "name": "비지곶식당",
      "category": "음식점",
      "description": "제주시 구좌읍 일주동로 3002. 해장국 단일 메뉴의 로컬 해장 맛집.",
      "score": 68,
      "selected": false,
      "source": "https://www.gqkorea.co.kr/2023/05/22/%ec%a0%9c%ec%a3%bc%ec%9d%98-%eb%8f%99%ec%aa%bd%eb%82%98%eb%9d%bc-%ea%b5%ac%ec%a2%8c%ec%9d%8d-%ec%97%ac%ed%96%89-%ec%a2%8c%ed%91%9c/"
    },
    {
      "name": "무릉소운 더 테이블",
      "category": "음식점",
      "description": "서귀포 대정읍 무릉리. 제주 감자 뇨끼 등 이탈리안, 바다·들판 전망 창.",
      "score": 70,
      "selected": false,
      "source": "https://www.elle.co.kr/article/1885649"
    },
    {
      "name": "곰막식당",
      "category": "음식점",
      "description": "한적한 항구 마을. 고등어회, 성게국수, 전복죽. 성수기 대기 있어 사전 전화 권장.",
      "score": 70,
      "selected": false,
      "source": "https://www.elle.co.kr/article/1885649"
    },
    {
      "name": "하하호호",
      "category": "음식점",
      "description": "성산·우도 권역. 구좌마늘 흑돼지버거, 우도땅콩 흑돼지버거, 제주딱새우버거.",
      "score": 65,
      "selected": false,
      "source": "https://www.siksinhot.com/toplists/best/ahnnews18"
    }
  ]
};
