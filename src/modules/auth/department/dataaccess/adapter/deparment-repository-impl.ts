import { injectable } from "inversify";
import { AppDataSource } from "../../../../../config/typeorm";
import { Department } from "../../domain/domain-core/entity/department";
import { DepartmentEntity } from "../entity/department-entity";
import { DepartmentRepository } from "../../domain/application-service/ports/output/repository/department-repository";
import { DepartmentDataAccessMapper } from "../mapper/department-dataaccess-mapper";
import { DepartmentDto } from "../../domain/application-service/dto/create/deparment-dto";
import DepartmentDataAccessException from "../exception/department-dataaccess-exception";

@injectable()
export class DepartmentRepositoryImpl implements DepartmentRepository{

    private _departmentDataAccessMapper:DepartmentDataAccessMapper;

    constructor(){
        this._departmentDataAccessMapper = new DepartmentDataAccessMapper();
    }
    
    
    async get(params: any): Promise<DepartmentDto[]> {

        try{
            
            const departmentRepository = AppDataSource.getRepository(DepartmentEntity);
            const departmentsEntities = await departmentRepository.find();
            
            let departments:DepartmentDto[] = [];

            departmentsEntities.forEach((departmentEntity) => {
                departments.push(this._departmentDataAccessMapper.departmentEntityTodepartmentDto(departmentEntity));
            });

            return departments;

        }catch(err){
            //TODO: save into logger
            throw new DepartmentDataAccessException("Ocurrio un error al consultar los departamentos");
        }

    }
    
    async save(department: Department): Promise<Department> {
        try{
            
            const departmentRepository = AppDataSource.getRepository(DepartmentEntity);
            
            const departmentSaved =  await departmentRepository.save(this._departmentDataAccessMapper.departmentTodepartmentEntity(department));

            return this._departmentDataAccessMapper.departmentEntityTodepartment(departmentSaved);
          

        }catch(err){
            //TODO: save into logger
            throw new DepartmentDataAccessException("Ocurrio un error al guardar el departamento");
        }
    }
    
    async findByPk(iddepartment: number): Promise<Department | null> {
        try{
            
            const userRepository = AppDataSource.getRepository(DepartmentEntity);
            const departmentEntity = await userRepository.findOne({where:{idDepartment: iddepartment}});  
            
            if(departmentEntity){
                return this._departmentDataAccessMapper.departmentEntityTodepartment(departmentEntity);
            }      

            return null;
          

        }catch(err){
            //TODO: save into logger
            throw new DepartmentDataAccessException("Ocurrio un error al consultar el departamento");
        }
    }


    async findByName(name: string): Promise<Department | null> {
        try{
            
            const userRepository = AppDataSource.getRepository(DepartmentEntity);
            const departmentEntity = await userRepository.findOne({where:{name: name}});  
            
            if(departmentEntity){
                return this._departmentDataAccessMapper.departmentEntityTodepartment(departmentEntity);
            }      

            return null;
          

        }catch(err){
            //TODO: save into logger
            throw new DepartmentDataAccessException("Ocurrio un error al consultar el departamento");
        }
    }

}