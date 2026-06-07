"""Application settings loaded from environment variables."""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres:password@localhost:5432/mindvault"
    SECRET_KEY: str = "change-this-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = ".env"


settings = Settings()
