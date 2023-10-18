import { useServiceTeamsQuery } from '@/redux/api/serviceTeamApi';
import FormSelectField, { SelectOptions } from './FormSelectField';

type ServiceTeamFieldProps = {
  name: string;
  label: string;
  required?: boolean;
};

const ServiceTeamField = ({ name, label, required }: ServiceTeamFieldProps) => {
  const { data, isLoading } = useServiceTeamsQuery({
    limit: 100,
    page: 1,
  });
  const teams = data?.serviceTeams;
  const teamOptions = teams?.map((team: any) => {
    return {
      label: team?.teamName,
      value: team?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={teamOptions as SelectOptions[]}
      required={required}
    />
  );
};

export default ServiceTeamField;
