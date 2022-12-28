import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('PasswordController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Send valid POST request', () => {
    return request(app.getHttpServer())
      .post('/passwords')
      .send({
        password: '12345!',
      })
      .expect(204);
  });

  it('Send invalid POST request', () => {
    return request(app.getHttpServer())
      .post('/passwords')
      .send({
        password: '123',
      })
      .expect(400);
  });
});
