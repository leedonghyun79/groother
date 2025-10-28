interface Recruits {
  id: number;
  title: string;
}

class RecruitsService {
  private recruits: Recruits[] = [];

  createRecruits(data: Omit<Recruits, 'id'>): Recruits {
    const newRecruits = { id: Date.now(), ...data };
    this.recruits.push(newRecruits);
    return newRecruits;
  }

  getRecruits(): Recruits[] {
    return this.recruits;
  }

  getRecruitsById(id: number): Recruits | undefined {
    return this.recruits.find(r => r.id === id);
  }

  updateRecruits(id: number, data: Partial<Omit<Recruits, 'id'>>): Recruits | undefined {
    const post = this.getRecruitsById(id);
    if (post) {
      Object.assign(post, data);
      return post;
    }
    return undefined;
  }

  deleteRecruits(id: number): boolean {
    const index = this.recruits.findIndex(r => r.id === id);
    if (index !== -1) {
      this.recruits.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default RecruitsService;
