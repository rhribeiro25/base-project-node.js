import { Hasher } from '@/data/protocols/criptography/hasher';
import faker from 'faker';

import { Decrypter } from '../protocols/criptography/decrypter';
import { Encrypter } from '../protocols/criptography/encrypter';
import { HashComparer } from '../protocols/criptography/hash-comparer';

export class HasherSpy implements Hasher {
  digest = faker.random.uuid();
  plaintext: string;

  async hash(plaintext: string): Promise<string> {
    this.plaintext = plaintext;
    return this.digest;
  }
}

export class HashComparerSpy implements HashComparer {
  plaintext: string;
  digest: string;
  isValid = true;

  async compare(plaintext: string, digest: string): Promise<boolean> {
    this.plaintext = plaintext;
    this.digest = digest;
    return this.isValid;
  }
}

export class EncrypterSpy implements Encrypter {
  ciphertext = faker.random.uuid();
  plaintext: string;

  async encrypt(plaintext: string): Promise<string> {
    this.plaintext = plaintext;
    return this.ciphertext;
  }
}

export class DecrypterSpy implements Decrypter {
  plaintext = faker.internet.password();
  ciphertext: string;

  async decrypt(ciphertext: string): Promise<string> {
    this.ciphertext = ciphertext;
    return this.plaintext;
  }
}
