interface Period {
    start: string;
    end: string;
}

interface Project {
    id: number;
    title: string;
    period: Period;
    description: string[];
    techStack: string[];
}

interface LotteProject {
    name: string;
    projects: Project[];
}

interface WebcashProject {
    name: string;
    projects: Project[];
}

const lotteProject = {
    name: '롯데e커머스',
    projects: [
        {
            id: 1,
            title: '데이터 파이프라인 전환',
            period: {
                start: '2021.01',
                end: '진행',
            },
            description: [
                'MSA 구조간 데이터 연동을 위해 사용하던 ETL을 Kafka 혹은 Spring Batch로 전환하는 전사 프로젝트에 참여했습니다.',
                'Kafka Connect : 단순 CDC 성격의 ETL의 경우 Kafka Connect를 활용하여 Source Connector 및 Sink Connector 를 구성해서 전환했습니다. 주로 RDS - RDS 간의 데이터 파이프라인을 구성했습니다.',
                'KSQL, Custom SMT 플러그인 개발 : CDC 성격이지만 추가적으로 간단한 도메인 요구사항이 필요한 경우에는 성격에 맞게 KSQL 혹은 Custom SMT 플러그인을 개발해 사용했습니다.',
                'RMQ > Kafka 전환 : 기존에 Message Broker로 사용하고 있던 RMQ를 Kafka로 전환했습니다. 수신 모듈과 발신 모듈 의 작업시기가 달라 Feature Flag로 개발하여 유연하게 적용할 수 있도록 개발했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 2,
            title: '데이터베이스 이관 (PostgreSQL -> MySQL)',
            period: {
                start: '2021.01',
                end: '진행',
            },
            description: [
                '이력을 저장하는 DB로 PostgreSQL을 활용했으나 비용 효율화 및 시스템의 원활한 유지를 위해 이를 절체하고 MySQL로 이관 하는 프로젝트에 참여했습니다. DB엔지니어링팀과 협업하고 어플리케이션 코드 레벨에서도 다르게 적재하는 부분을 수정개발하여 다운타임을 최소화할 수 있도록 작업했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 3,
            title: '공통 기준정보 브로드캐스팅 캐싱 개선',
            period: {
                start: '2021.01',
                end: '진행',
            },
            description: [
                '전체 MSA 인스턴스에 브로드 캐스팅 메시지를 송신하여 권한 및 기준정보를 갱신시키는 기능을 캐싱 구조를 변경하여 CPU 사용률과 쿼리 수행 시간을 개선했습니다.',
                '쿼리 수행횟수는 각 모듈의 파드수인 352 회 → 모듈별 1회 ( 22회 ) 로 감소했으며 기존에는 2배수준 (12% → 25%)로 상승 하던 CPU 사용률이 이후에는 지표상으로 상승이 보이지 않았습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 4,
            title: '사내 백오피스 시스템 인증, 인가 시스템 개선',
            period: {
                start: '2021.01',
                end: '진행',
            },
            description: [
                '전사 IAM 시스템 전환 프로젝트에 참여해 사내 백오피스 시스템 로그인과 인증을 Okta Auth Provider를 이용한 Oauth 2.0 기 반의 SSO로 전환했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 5,
            title: '신규 휴일 서비스 개발',
            period: {
                start: '2021.01',
                end: '진행',
            },
            description: [
                '전사 IAM 시스템 전환 프로젝트에 참여해 사내 백오피스 시스템 로그인과 인증을 Okta Auth Provider를 이용한 Oauth 2.0 기 반의 SSO로 전환했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 6,
            title: '점유인증',
            period: {
                start: '2021.01',
                end: '진행',
            },
            description: [
                '전사 IAM 시스템 전환 프로젝트에 참여해 사내 백오피스 시스템 로그인과 인증을 Okta Auth Provider를 이용한 Oauth 2.0 기 반의 SSO로 전환했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
    ],
}

const webcashProject = {
    name: '웹케시',
    projects: [
        {
            id: 1,
            title: '연구원 계약관리 개발',
            period: {
                start: '2020.10',
                end: '2022.05',
            },
            description: [
                '대학교 산학협력단에서 사용하는 ERP서비스를 담당하여 구매, 연구비 등의 업무 시스템을 개발했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 2,
            title: 'Jex 프레임워크 전환',
            period: {
                start: '2020.10',
                end: '2022.05',
            },
            description: [
                '대학교 산학협력단에서 사용하는 ERP서비스를 담당하여 구매, 연구비 등의 업무 시스템을 개발했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
        {
            id: 3,
            title: '외부 채널과 연계 및 인터페이스 배치 개발',
            period: {
                start: '2020.10',
                end: '2022.05',
            },
            description: [
                '대학교 산학협력단에서 사용하는 ERP서비스를 담당하여 구매, 연구비 등의 업무 시스템을 개발했습니다.',
            ],
            techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Spring Batch', 'MyBatis', 'MySQL', 'MS-SQL', 'PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ', 'Git', 'Jira', 'Confluence', 'SVN', 'Slack'],
        },
    ],
}

export { lotteProject, webcashProject };
export type { Project, Period };
