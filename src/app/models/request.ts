export class Request {
    DTAPstate: string;
    TenantID: number;
    RequestID: number;
    TenantName: string;
    CurrentState: string;
    FileName: string;
    ScenarioNameID: number;
    ScenarioName: string;
    CurrentStateID: number;
    DateTime: string;
    JobTypeName: string;
}

export interface Instruction {
    DTAPstate: string;
    TenantID: number;
    RequestID: number;
    TenantName: string;
    CurrentState: string;
    FileName: string;
    ScenarioNameID: number;
    ScenarioName: string;
    CurrentStateID: number;
    DateTime: string;
    JobTypeName: string;
}
