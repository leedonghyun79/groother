import { Request, Response } from 'express';
import RecruitsService from './recruits.service.js';

export class RecruitsController {
  private recruitsService = new RecruitsService();

  createRecruits = (req: Request, res: Response) => {
    const newRecruits = this.recruitsService.createRecruits(req.body);
    res.status(201).json(newRecruits);
  };

  getRecruits = (req: Request, res: Response) => {
    const recruits = this.recruitsService.getRecruits();
    res.json(recruits);
  };

  getRecruitsById = (req: Request, res: Response) => {
    const recruits = this.recruitsService.getRecruitsById(Number(req.params.id));
    if (!recruits) return res.status(404).json({ message: 'Recruits not found' });
    res.json(recruits);
  };

  updateRecruits = (req: Request, res: Response) => {
    const updated = this.recruitsService.updateRecruits(Number(req.params.id), req.body);
    if (!updated) return res.status(404).json({ message: 'Recruits not found' });
    res.json(updated);
  };

  deleteRecruits = (req: Request, res: Response) => {
    const deleted = this.recruitsService.deleteRecruits(Number(req.params.id));
    if (!deleted) return res.status(404).json({ message: 'Recruits not found' });
    res.status(204).send();
  };
}
