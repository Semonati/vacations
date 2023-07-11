import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSnackBar } from "../../providers/SnackBarProvifer";
import ROUTES from "../../router/routesModel";
import normalizevacation from "../helpers/normalization/normalizaeVacation";
import {
  getVacations,
  changeLikeStatus,
  createVacation,
  deleteVacation,
  editVacation,
  getMyVacations,
  getVacation,
} from "../services/vacationApiService";

const useVacations = () => {
  const [vacations, setVacations] = useState();
  const [vacation, setVacation] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const snack = useSnackBar();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(null);
  const [isSearch] = useSearchParams();
  const { userId } = useParams();

  useEffect(() => {
    setQuery(isSearch.get("q") ?? "");
  }, [isSearch]);

  useEffect(() => {
    if (vacations) {
      setFiltered(
        vacations.filter((vacation) => vacation.title.includes(query))
      );
    }
  }, [vacations, query]);

  useAxios();

  const requestStatus = useCallback(
    (pending, errorMessage, vacations, vacation = null) => {
      setIsPending(pending);
      setError(errorMessage);
      setVacations(vacations);
      setVacation(vacation);
    },
    [vacations]
  );

  const handleGetVacations = useCallback(async () => {
    try {
      setIsPending(true);
      const vacations = await getVacations();
      requestStatus(false, null, vacations);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetVacation = useCallback(async (vacationId) => {
    try {
      setIsPending(true);
      const vacation = await getVacation(vacationId);
      requestStatus(false, null, null, vacation);
      return vacation;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyVacations = useCallback(async () => {
    try {
      setIsPending(true);
      const vacations = await getMyVacations();
      return requestStatus(false, null, vacations);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  }, []);

  const handleCreateVacation = useCallback(async (vacationFromClient) => {
    try {
      setIsPending(true);
      const normelizedvacation = normalizevacation(vacationFromClient);
      const vacation = await createVacation(normelizedvacation);
      snack("success", "A new vacation was seccessfully created");
      return requestStatus(false, null, vacation);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateVacation = useCallback(
    async (vacationId, vacationFromClient) => {
      try {
        setIsPending(true);
        const vacation = await editVacation(vacationId, vacationFromClient);
        requestStatus(false, null, null, vacation);
        snack("success", "The vacation was seccessfully updated");
        navigate(ROUTES.ROOT);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteVacation = useCallback(async (vacationId) => {
    try {
      setIsPending(true);
      const vacationDeleted = await deleteVacation(vacationId);
      snack("success", "The vacation story was seccessfully deleted");
      navigate(ROUTES.My_VACATIONS);
      return requestStatus(false, null, vacationDeleted);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  }, []);

  const handleLikeVacation = async (vacationId) => {
    try {
      setIsPending(false);
      const vacation = await changeLikeStatus(vacationId);
      return requestStatus(false, null, vacations, vacation);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  };

  const handleGetFavVacations = useCallback(async () => {
    try {
      setIsPending(true);
      const vacations = await getVacations();
      const favVacations = vacations.filter(
        (vacation) => !!vacation.likes.find((id) => id === userId)
      );

      return requestStatus(false, null, favVacations);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);


  const value = useMemo(() => {
    return { isPending, vacation, vacations, error, filtered };
  }, [isPending, vacation, vacations, error, filtered]);

  return {
    value,
    handleGetVacations,
    handleGetVacation,
    handleGetMyVacations,
    handleDeleteVacation,
    handleCreateVacation,
    handleUpdateVacation,
    handleLikeVacation,
    handleGetFavVacations,
  };
};

export default useVacations;
