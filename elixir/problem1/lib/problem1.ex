defmodule Problem1 do
  @moduledoc """
  Project Euler problem 1
  """

  def sum_multiples_recursive(bound, div1, div2, cumulant \\ 0)

  def sum_multiples_recursive(0, _, _, cumulant) do
    cumulant
  end

  def sum_multiples_recursive(bound, div1, div2, cumulant) when bound |> is_integer do
    cond do
      _is_divisible?(bound, div1) or _is_divisible?(bound, div2) ->
        sum_multiples_recursive(bound - 1, div1, div2, cumulant + bound)

      true ->
        sum_multiples_recursive(bound - 1, div1, div2, cumulant)
    end
  end

  def sum_multiples_functional(bound, div1, div2) do
    list_of_nums = 0..bound |> Enum.to_list()

    callback = fn el, acc ->
      cond do
        _is_divisible?(el, div1) or _is_divisible?(el, div2) ->
          acc + el

        true ->
          acc
      end
    end

    list_of_nums |> Enum.reduce(0, fn el, acc -> callback.(el, acc) end)
  end

  # private methods

  defp _is_divisible?(target, divisor) do
    rem(target, divisor) == 0
  end
end
