## 테스트 인스턴스에 접속하기

```
# MacOS / 인스턴스에 접근하기 위해  [.pem] 파일을 [JINYTREE] 에게 요청하세요.

# 우선적으로 pem파일의 권한 범위를 400으로 설정해야 합니다.
 sudo chmod 400 [ path/pem/file ]

# 이후 인스턴스에 접속할 수 있습니다.
ssh -i [path/pem/file] ubuntu@13.124.20.45
```

#### 인스턴스에 접속한 후에 할 수 있는 일들

- PostgreSQL 접속 및 데이터 query

### 스왑파일 생성하여 부족함 메모리를 커버해야합니다

```
# 스왑파일 2gb를 만듭니다.
sudo dd if=/dev/zero of=/swapfile bs=128M count=16
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon -s
# 부팅 설정
sudo nano /etc/fstab

# 파일 끝에 아래 문장 추가
/swapfile swap swap defaults 0 0


#
```

### postgresql 의 권한 설정

```
# sudo nano /etc/postgresql/12/main/pg_hba.conf 경로 파일 변경
# 루트 관리자 비번접속 유도하려면 postgres를 md5로 설정
# local     {name}          {md5 || peer}  peer = 비번없이 접근 가능
sudo service postgresql restart

# 루트로 접속
sudo -u postgres;

# db생성
CREATE DATABASE {dbName};

# 유저 생성 및 비번관리
CREATE USER {username} WITH PASSWORD 'password';
# 비번변경
ALTER USER {username} PASSWORD 'newpassword';

# db연결 및 권한 부여
GRANT CONNECT ON DATABASE {dbName} TO {username};
GRANT SELECT ON ALL TABLES IN SCHEMA public TO {username};

# 접속
sudo -U {username} -d {dbName}

```
