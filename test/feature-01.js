
import { TravisStudy } from '../src/index';
import { expect } from 'chai';

describe('feature-01', ()=>{
  it('ok?', ()=>{
    let obj = new TravisStudy();
    console.log('ok');
    expect(obj.method1(1)).to.be.equal(2);
  })
});